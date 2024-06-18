import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import Quastion from "../../ui/Question/Question";
import "../ProfileStatusLayout/ProfileStatusLayout.css";
import statusData from "../../../status.json";
import Input from "../../ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../../config/firebase";
import { updatePassword } from "firebase/auth";

function ProfileStatusLayout(props) {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedPredizvik, setSelectedPredizsvik] = useState(null);
  const [completedDays, setCompletedDays] = useState({});
  const [activePopup, setActivePopup] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentLayout, setCurrentLayout] = useState("");
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate();
  const categories = ["Анксиозност", "Менаџирање со гнев", "Депресија"];

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  console.log(user)

  const handleLogout = async () => {
    await logout();
    setLoggedOut(true);
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
    setSelectedTitle(title);
    setSelectedDay(null);
    setSelectedPredizsvik(null);
  };

  const handleDayClick = (id) => {
    setSelectedDay(id);
  };

  const filterDataByCategory = (category) => {
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

  useEffect(() => {
    if (selectedTitle && selectedDay) {
      const predizvikDetail = getDayData(selectedTitle, selectedDay);
      setSelectedPredizsvik(predizvikDetail.predizvik);
    }
  }, [selectedTitle, selectedDay]);

  const handleCompleteAndBackClick = () => {
    if (selectedDay !== null) {
      setCompletedDays((prev) => ({
        ...prev,
        [selectedTitle]: {
          ...prev[selectedTitle],
          [selectedDay]: true,
        },
      }));
      setSelectedDay(null);
    }
  };

  const renderDayData = () => {
    const dayData = getDayData(selectedTitle, selectedDay);
    console.log(selectedDay);
    return dayData ? (
      <div key={dayData.id} className="dayDetail">
        <img
          className="imgFrame2_1"
          src="assets/images/frame.jpg"
          alt="imgFrame2"
        />
        <ProfileStatusWidget
          key={dayData.id}
          className="selectedDayStatus"
          style="styles"
          style1="style1"
          status={dayData.naslov}
          description={dayData.descrition}
        />
        <Button
          classname="btnFinish"
          content={"Завршено"}
          onClick={handleCompleteAndBackClick}
        />
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

  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue >= 100 ? 0 : prevValue + 1));
    }, 1000); // Update the value every 1 second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {selectedTitle ? (
        <>
          <Title
            className="title"
            img="/assets/icons/vector.svg"
            title={selectedPredizvik ? selectedPredizvik : selectedTitle}
          />
          <div className="categoryWidget">
            {selectedDay ? (
              <>{renderDayData()}</>
            ) : (
              <>
                {filterDataByCategory(selectedTitle).map((item, index) => {
                  const day = index + 1;
                  const isCompleted = completedDays[selectedTitle]?.[day];
                  return (
                    <div
                      key={index}
                      className={`categorywidgets ${
                        isCompleted ? "completed" : ""
                      }`}
                      onClick={() => handleDayClick(item.id)}
                      style={{ pointerEvents: isCompleted ? "none" : "auto" }}
                    >
                      <img
                        className="imgFrames"
                        src={`/assets/images/frame.jpg`}
                        alt={`Frame ${index}`}
                      />
                      <ProfileStatusWidget
                        key={item.id}
                        className="profileWidgetsStatus"
                        style="styles"
                        status={item.predizvik}
                      />
                    </div>
                  );
                })}
              </>
            )}
            <img
              className="imgFramee"
              src={`/assets/images/frame.jpg`}
              alt="Frame"
            />
          </div>
        </>
      ) : (
        <>
          {currentLayout ? (
            <>
              <Quastion
                style={{
                  fontSize: 30,
                  fontWeight: "lighter",
                  position: "relative",
                  bottom: 30,
                }}
                main={"Медитирајте со нас"}
              />
              <div className="playMode">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                /> 
                <span>{value}</span>
                <img
                  className="playAndStop"
                  src="assets/icons/playandstop.svg"
                />
              </div>
            </>
          ) : (
            <>
              <ProfileStatusWidget className="profileWidgetStatus" />
              <div className="profileStatusLayout">
                <div onClick={() => handleWidgetClick(0)}>
                  <img
                    className="imgFrame1"
                    src="assets/images/frame.jpg"
                    alt="imgFrame1"
                  />
                  <ProfileStatusWidget
                    className="styleWidget1"
                    status={props.status1}
                  />
                </div>
                <div onClick={() => handleWidgetClick(1)}>
                  <img
                    className="imgFrame2"
                    src="assets/images/frame.jpg"
                    alt="imgFrame2"
                  />
                  <ProfileStatusWidget
                    className="styleWidget2"
                    status={props.status2}
                  />
                </div>
                <div onClick={() => handleWidgetClick(2)}>
                  <img
                    className="imgFrame3"
                    src="assets/images/frame.jpg"
                    alt="imgFrame3"
                  />
                  <ProfileStatusWidget
                    className="styleWidget3"
                    status={props.status3}
                  />
                </div>
                <div onClick={handleHelpClick}>
                  <img
                    className="imgFrame4"
                    src="assets/images/frame.jpg"
                    alt="imgFrame4"
                  />
                  <ProfileStatusWidget
                    className="styleWidget4"
                    status={"Помош сега"}
                  />
                </div>
              </div>
              <div className="buttonsProfile">
                <Button
                  classname="buttonProfile"
                  content={"Преглед на податоци"}
                  onClick={() => handleTogglePopup(1)}
                />
                <Button
                  classname="buttonProfile"
                  content={"Ажурирај податоци"}
                  onClick={() => handleTogglePopup(2)}
                />
                <Button
                  classname="buttonProfile"
                  content={"Правила и обврски"}
                  onClick={() => handleTogglePopup(3)}
                />
                <Button
                  classname="buttonProfile"
                  content={"Одјава"}
                  onClick={handleLogout}
                />
              </div>
              {activePopup === 1 && (
                <div>
                  <ProfileStatusWidget
                    style="pregledNaPodatoci1"
                    status={`Електронски маил: ${user ? user.email : ""}`}
                    description={`Корисник: ${user ? user.displayName : ""}`}
                  />
                </div>
              )}
              {activePopup === 2 && (
                <div>
                  <ProfileStatusWidget
                    style="pregledNaPodatoci2"
                    status={"Електронски маил: "}
                    description={"Стара лозинка:"}
                    description1={"Нова лозинка:"}
                  />
                  <Input className="input1" type={"text"} />
                  <Input
                    className="input2"
                    type={"password"}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    value={currentPassword}
                  />
                  <Input
                    className="input3"
                    type={"password"}
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                  />
                  <Button
                    classname="buttonAzuriraj"
                    content={"Ажурирај"}
                    onClick={handlePasswordUpdate}
                  />
                </div>
              )}
              {activePopup === 3 && (
                <div>
                  <ProfileStatusWidget
                    style="pregledNaPodatoci3"
                    status={
                      "Услови за користење на апликацијата за ментално здравје"
                    }
                    description={
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
            </>
          )}
        </>
      )}
    </>
  );
}

export default ProfileStatusLayout;
