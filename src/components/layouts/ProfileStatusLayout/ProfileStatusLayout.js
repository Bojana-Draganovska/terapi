import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import Quastion from "../../ui/Question/Question";
import "../ProfileStatusLayout/ProfileStatusLayout.css";
import statusData from "../../../status.json";
import popustData from "../../../popust.json";
import Input from "../../ui/Input/Input";
import ColorPiker from "../../ui/ColorPiker/ColorPiker";
import { useNavigate } from "react-router-dom";
import { auth, logout, fetchUserPoints, saveUserPoints } from "../../../config/firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";
import FontSizeSelector from "../../ui/FontSizeSelector/FontSizeSelector";
import { useFont } from "../../../context/FontContext";
import FontFamilySelector from "../../ui/FontFamilySelector/FontFamilySelector";
import PersonalizationWidget from "../../widgets/PersonalizationWidget/PersonalizationWidget";
import ProgressWidget from "../../widgets/ProgressWidget/ProgressWidget";


const db = getFirestore();

function ProfileStatusLayout(props) {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [completedDays, setCompletedDays] = useState({});
    const [activePopup, setActivePopup] = useState(null);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [currentLayout, setCurrentLayout] = useState("");
    const [user, setUser] = useState(null);
    const [loggedOut, setLoggedOut] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pointsCollected, setPointsCollected] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButtonZaveseno, setSelectedButtonZavrseno] = useState(Array(statusData.length).fill(false));
    const audioRef = useRef(new Audio("/assets/audio/meditacijaWomen.mp3"));
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    const {styles} = useFont();
    const categories = ["Анксиозност", "Менаџирање со гнев", "Депресија"];

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                navigate("/my-profile");
            }
        });

        return unsubscribe;
    }, [navigate]);

    useEffect(() => {
        const fetchPoints = async () => {
            if (user) {
                const points = await fetchUserPoints(user.uid);
                setPointsCollected(points);
                localStorage.setItem('pointsCollected', points);
            }
        };

        fetchPoints();
    }, [user]);

    useEffect(() => {
        const initUserPoints = async () => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (!docSnap.exists()) {
                    await setDoc(docRef, { pointsCollected: 0 });
                    setPointsCollected(0);
                }
            }
        };

        initUserPoints();
    }, [user]);

    useEffect(() => {
        localStorage.setItem('pointsCollected', pointsCollected);
    }, [pointsCollected]);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    useEffect(() => {
        if (loggedOut) {
            navigate("/");
        }
    }, [loggedOut, navigate]);

    const handleTogglePopup = (id) => {
        setActivePopup((prevId) => (prevId === id ? null : id));
    };
    const handleWidgetClick = (index) => {
        const title = categories[index];
        const categoryData = filterDataByCategory(title);
        setSelectedTitle(title);
        setSelectedDay(null);
        setSelectedButton(null);
        setSelectedButtonZavrseno(Array(statusData.length).fill(false));

        sessionStorage.setItem('selectedCategory', title);

        if (categoryData.length > 0) {
            setCurrentIndex(0);
            setSelectedDay(categoryData[0].id);
        }
    };

    const filterDataByCategory = (category) => {
        if (category === `Состојба: ${pointsCollected}`) {
            return popustData;
        }
        const categoryIndex = categories.indexOf(category);
        if (categoryIndex !== -1) {
            const start = categoryIndex * 7;
            const end = start + 7;
            return statusData.slice(start, end);
        }
        return [];
    };

    const getDayData = (category, id) => {
        const data = filterDataByCategory(category);
        return data.find((item) => item.id === id);
    };

    const getCategoryPoints = (index) => {
        const start = index * 7;
        const end = start + 7;
        const categoryData = statusData.slice(start, end);
        const categoryPoints = categoryData.reduce((totalPoints, item) => {
            return totalPoints + (completedDays[item.naslov]?.[item.id] ? item.poeni : 0);
        }, 0);
        return categoryPoints;
    };

    useEffect(() => {
        const savedPoints = localStorage.getItem('pointsCollected');
        if (savedPoints) {
            setPointsCollected(parseInt(savedPoints, 10));
        }
    }, []);


    const renderDayData = () => {
        const dayData = filterDataByCategory(selectedTitle).slice(0, 7);

        const handleNextClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex < dayData.length - 1 ? prevIndex + 1 : prevIndex));
        };

        const handleBackClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        };

        const handleCompleteClick = async () => {
            if (dayData[currentIndex]) {
                const newPoints = pointsCollected + dayData[currentIndex].poeni;
                setPointsCollected(newPoints);
                if (user) {
                    await saveUserPoints(user.uid, newPoints);
                }

                const updatedButtons = [...selectedButtonZaveseno];
                updatedButtons[currentIndex] = true;
                setSelectedButtonZavrseno(updatedButtons);
            }
        };

        const handleNavigateBack = () => {
            setSelectedTitle(null);
            setSelectedButton(null);
            sessionStorage.removeItem('selectedCategory');
            navigate(currentLayout);
        };

        return dayData.length > 0 ? (
            <div key={dayData[currentIndex].id} className="dayDetail">
                <img className="imgFrame2_1" src="assets/images/frame.jpg" alt="imgFrame2" />
                <ProgressWidget key={dayData[currentIndex].id} poeni={`Поени: ${dayData[currentIndex].poeni}`} className="styles" style="fontBold" points={dayData[currentIndex].poeni} status={dayData[currentIndex].naslov} description={dayData[currentIndex].descrition} />
                <Button classname="btnFinish" content={"Завршено"} onClick={handleCompleteClick} disabled={selectedButtonZaveseno[currentIndex]} style={{ opacity: selectedButtonZaveseno[currentIndex] ? 0.5 : 1, fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor }} />
                {currentIndex === 0 ? (
                    <img className="linenext" src="/assets/icons/linenext.svg" alt="linenext" onClick={handleNextClick} />
                ) : currentIndex === dayData.length - 1 ? (
                    <>
                        <img className="lineback" src="/assets/icons/lineback.svg" alt="lineback" onClick={handleBackClick} />
                        <Button style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} classname="back" content={"Назад"} onClick={handleNavigateBack} />
                    </>
                ) : (
                    <>
                        <img className="linenext" src="/assets/icons/linenext.svg" alt="linenext" onClick={handleNextClick} />
                        <img className="lineback" src="/assets/icons/lineback.svg" alt="lineback" onClick={handleBackClick} />
                    </>
                )}
            </div>
        ) : (
            <div>Day data not found</div>
        );
    };

    const handlePasswordUpdate = async () => {
        try {
            await updatePassword(auth.currentUser, newPassword);
            alert("Password updated successfully!");
            setNewPassword("");
        } catch (error) {
            console.error("Error updating password:", error);
        }
    };

    const handleHelpClick = () => {
        setCurrentLayout("help");
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = false;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        if (!audio.paused) {
            audio.pause();
        }

        return () => {
            audio.pause();
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            clearInterval(intervalRef.current);
        };
    }, []);

    const changeVoice = () => {
        const audio = audioRef.current;
        const currentSrc = audio.src;
        let newSrc = "";

        if (currentSrc.endsWith("meditacijaWomen.mp3")) {
            newSrc = "/assets/audio/meditacijaMen.mp3";
        } else {
            newSrc = "/assets/audio/meditacijaWomen.mp3";
        }

        audio.pause();
        audio.src = newSrc;
        audio.load();
    }

    useEffect(() => {
        if (isPlaying) {
            if (audioRef.current.paused) {
                audioRef.current.play()
                    .then(() => {
                        console.log("Audio played successfully");
                        intervalRef.current = setInterval(() => {
                            setCurrentTime(audioRef.current.currentTime);
                        }, 100);
                    })
                    .catch((error) => {
                        console.error("Error playing audio:", error);
                    });
            }
        } else {
            if (!audioRef.current.paused) {
                audioRef.current.pause();
                clearInterval(intervalRef.current);
            }
        }
    }, [isPlaying]);


    const handleStartStop = () => {
        console.log("Button clicked!");
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setCurrentTime(value);
        audioRef.current.currentTime = value;
    };

    const handlePredizviciClick = () => {
        setSelectedButton("predizvici");
        setSelectedTitle(selectedTitle);
    };

    const handlePregledNaPoeniClick = () => {
        setSelectedButton("pregledNaPoeni");
        setSelectedTitle(`Состојба: ${pointsCollected}`);
    };

    return (
        <>
            {selectedTitle ? (
                <>
                    <Title className="title" img="/assets/icons/vector.svg" title={selectedTitle} />
                    <div className="categoryWidget">
                        {selectedButton === "predizvici" ? (
                            renderDayData()
                        ) : selectedButton === "pregledNaPoeni" ? (
                            <>
                                {filterDataByCategory(selectedTitle).map((item, index) => {
                                    const isWidgetClickable = pointsCollected >= item.poeni;
                                    return (
                                        <div key={index} className={`filterDataCategory ${isWidgetClickable ? 'clickable' : 'disabled'}`} onClick={() => {
                                            if (isWidgetClickable) {
                                                window.location.href = item.url;
                                            }
                                        }} style={{ opacity: isWidgetClickable ? 1 : 0.5 }}>
                                            <img className="imgFrames" src={`/assets/images/frame.jpg`} alt={`Frame ${index}`} />
                                            <ProfileStatusWidget key={item.id} className={`profileWidgetsStatus ${isWidgetClickable ? '' : 'disabled'}`} status={`Поени: ${item.poeni}`} description1={item.popust} naslovPredizvik1="naslovPredizvik" />
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <div className="predizviciIPoeni">
                                <img className="imgFramePred" src="assets/images/frame.jpg" />
                                <Button style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} classname="predizvici" content={"Предизвици"} onClick={handlePredizviciClick} />
                                <img className="imgFramePred1" src="assets/images/frame.jpg" />
                                <Button style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} classname="pregledNaPoeni" content={"Преглед на поени"} onClick={handlePregledNaPoeniClick} />
                            </div>
                        )}
                        <img className="imgFramee" src={`/assets/images/frame.jpg`} alt="Frame" />
                    </div>
                </>
            ) : (
                <>
                    {currentLayout ? (
                        <>
                            <Quastion style={{ fontSize: styles.question.fontSize, fontFamily: styles.question.fontFamily, color: styles.question.color, backgroundColor: styles.question.backgroundColor, fontWeight: "lighter", position: "relative", bottom: 30 }} main={"Медитирајте со нас"} />
                            <div className="playMode">
                                <input style={{ width: 600 }} type="range" min="0" max={duration} value={currentTime} onChange={handleChange} step={0.1} />
                                <img onClick={handleStartStop} className="playAndStop" src="assets/icons/playandstop.svg" />
                            </div>
                            <Button style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} classname={"changeVoice"} content={"Смени глас"} onClick={changeVoice} />
                        </>
                    ) : (
                        <>
                            <div onClick={handleHelpClick}>
                                <img className="imgFrame4" src="assets/images/frame.jpg" alt="imgFrame4" />
                                <ProgressWidget className="styleWidget4" status={"Помош сега"} />
                            </div>
                            <div className="profileStatusLayout">
                                <div onClick={() => handleWidgetClick(0)}>
                                    <img className="imgFrame1" src="assets/images/frame.jpg" alt="imgFrame1" poeni={getCategoryPoints(0)} />
                                    <ProgressWidget className="styleWidget1" status={props.status1} />
                                </div>
                                <div onClick={() => handleWidgetClick(1)}>
                                    <img className="imgFrame2" src="assets/images/frame.jpg" alt="imgFrame2" poeni={getCategoryPoints(1)} />
                                    <ProgressWidget className="styleWidget2" status={props.status2} />
                                </div>
                                <div onClick={() => handleWidgetClick(2)}>
                                    <img className="imgFrame3" src="assets/images/frame.jpg" alt="imgFrame3" poeni={getCategoryPoints(2)} />
                                    <ProgressWidget className="styleWidget3" status={props.status3} />
                                </div>
                            </div>
                            <ProfileStatusWidget className="profileWidgetStatus" />
                            <div className="buttonsProfile">
                                <Button classname="buttonProfile" style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} content={"Преглед на податоци"} onClick={() => handleTogglePopup(1)} />
                                <Button classname="buttonProfile" style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} content={"Ажурирај податоци"} onClick={() => handleTogglePopup(2)} />
                                <Button classname="buttonProfile" style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} content={"Правила и обврски"} onClick={() => handleTogglePopup(3)} />
                                <Button classname="buttonProfile" style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} content={"Персонализација"} onClick={() => handleTogglePopup(4)} />
                                <Button classname="buttonProfile" style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} content={"Одјава"} onClick={handleLogout} />
                            </div>
                            {activePopup === 1 && (
                                <div>
                                    <ProfileStatusWidget className="pregledNaPodatoci1" status={`Електронски маил: ${user ? user.email : ""}`} description={`Корисник: ${user ? user.displayName : ""}`} />
                                </div>
                            )}
                            {activePopup === 2 && (
                                <div>
                                    <ProfileStatusWidget className="pregledNaPodatoci2" description={"Електронски маил: "} description1={"Стара лозинка:"} description2={"Нова лозинка:"} />
                                    <Input className="input1" type={"text"} />
                                    <Input className="input2" type={"password"} onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} />
                                    <Input className="input3" type={"password"} onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
                                    <Button style={{fontSize: styles.button.fontSize, fontFamily: styles.button.fontFamily, color: styles.button.color, backgroundColor: styles.button.backgroundColor}} classname="buttonAzuriraj" content={"Ажурирај"} onClick={handlePasswordUpdate} />
                                </div>
                            )}
                            {activePopup === 3 && (
                                <div>
                                    <ProfileStatusWidget className="pregledNaPodatoci3" status={"Услови за користење на апликацијата за ментално здравје"} description={
                                        "Прифаќање на условите: Со користење на оваа апликација, се согласувате да ги почитувате и да бидете обврзани со овие услови за користење.\n" +
                                        "Политика за приватност: Вашата приватност е важна за нас. Ве молиме прегледајте ја нашата Политика за приватност, која исто така го регулира вашето користење на апликацијата.\n" +
                                        "Користење на апликацијата: Оваа апликација е наменета само за информативни цели и не претставува медицински совет или третман.\n" +
                                        "Одговорности на корисникот: Вие се согласувате да ја користите апликацијата на ваш сопствен ризик. Вие сте одговорни за вашето користење на апликацијата и ја примате целокупната одговорност за последиците кои може да настанат од вашето користење на апликацијата.\n" +
                                        "Контактирајте со нас: За било какви прашања или сугестии, ве молиме контактирајте не на contact@mentalhealthapp.com."
                                    }
                                        description1={
                                            "За повеќе информации, молиме посетете го нашиот сајт на www.mentalhealthapp.com"
                                        }
                                    />
                                </div>
                            )}
                            {activePopup === 4 && (
                                <div>
                                    <ProfileStatusWidget className="pregledNaPodatoci4" description="Компонента:" description1="Фонт:" description2="Боја на фонт:" description3="Големина на фонт:" description4="Позадинска боја:"/>
                                    <PersonalizationWidget/>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default ProfileStatusLayout;
