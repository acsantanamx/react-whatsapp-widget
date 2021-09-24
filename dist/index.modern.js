import React, { useState, useContext } from 'react';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

var styles = {"root":"_App-module__root__2iWL7","open":"_App-module__open__1fOYS","customTransition":"_App-module__customTransition__11FGp","close":"_App-module__close__bvAzs"};

const Context = React.createContext({});
function WidgetContextProvider({
  children
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prevState => setIsOpen(!prevState));
  };

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isOpen,
      handleOpen
    }
  }, children);
}

var styles$1 = {"root":"_Header-module__root__2rVjT","close_btn":"_Header-module__close_btn__1w7Ch","logo":"_Header-module__logo__10MlI","texts":"_Header-module__texts__1Ixzy","texts_h1":"_Header-module__texts_h1__2C9-R","texts_span":"_Header-module__texts_span__3B7os"};

function Header({
  companyName,
  textReplyTime,
  iconLogo,
  handleOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.root
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$1.close_btn,
    onClick: handleOpen
  }, /*#__PURE__*/React.createElement(AiOutlineClose, null)), /*#__PURE__*/React.createElement("div", {
    className: styles$1.logo
  }, iconLogo), /*#__PURE__*/React.createElement("div", {
    className: styles$1.texts
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$1.texts_h1
  }, companyName), /*#__PURE__*/React.createElement("span", {
    className: styles$1.texts_span
  }, textReplyTime)));
}

var styles$2 = {"root":"_ChatSection-module__root__3YWHv","message":"_ChatSection-module__message__nYEjV","message_title":"_ChatSection-module__message_title__jryeF","message_body":"_ChatSection-module__message_body__3CMpi","triangle_top_right":"_ChatSection-module__triangle_top_right__eRm_Y","message_time":"_ChatSection-module__message_time__2x2HJ"};

function ChatSection({
  companyName,
  message
}) {
  const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.root
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.message
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$2.triangle_top_right
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$2.message_title
  }, companyName), /*#__PURE__*/React.createElement("p", {
    className: styles$2.message_body
  }, message), /*#__PURE__*/React.createElement("span", {
    className: styles$2.message_time
  }, time)));
}

var styles$3 = {"root":"_SendButton-module__root__30mQ0","input":"_SendButton-module__input__2-mAj","button":"_SendButton-module__button__2W95M"};

function SendButton({
  sendButton,
  phoneNumber,
  placeholder
}) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number');
      return false;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
    setMessage('');
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.root
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    className: styles$3.input,
    onChange: handleChange,
    value: message
  }), /*#__PURE__*/React.createElement("button", {
    className: styles$3.button,
    onClick: handleSend
  }, sendButton));
}

function App(props) {
  const {
    isOpen,
    handleOpen
  } = useContext(Context);
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles.root} ${isOpen ? styles.open : styles.close}`
  }, /*#__PURE__*/React.createElement(Header, Object.assign({
    handleOpen: handleOpen
  }, props)), /*#__PURE__*/React.createElement(ChatSection, props), /*#__PURE__*/React.createElement(SendButton, props));
}

var styles$4 = {"root":"_WhatsAppButton-module__root__1bpcM"};

function WhatsAppButton() {
  const {
    handleOpen
  } = useContext(Context);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.root,
    onClick: handleOpen
  }, /*#__PURE__*/React.createElement(FaWhatsapp, null));
}

var styles$5 = {};

function WhatsAppWidget({
  textReplyTime = 'Typically replies within a day',
  message = `Hello! 👋🏼 \n\nWhat can we do for you?`,
  companyName = 'Support',
  sendButton = 'Send',
  placeholder = 'Type a message',
  iconLogo = () => /*#__PURE__*/React.createElement(BiSupport, null),
  phoneNumber
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$5.root
  }, /*#__PURE__*/React.createElement(WidgetContextProvider, null, /*#__PURE__*/React.createElement(App, {
    textReplyTime: textReplyTime,
    companyName: companyName,
    phoneNumber: phoneNumber,
    sendButton: sendButton,
    placeholder: placeholder,
    message: message,
    iconLogo: iconLogo
  }), /*#__PURE__*/React.createElement(WhatsAppButton, null)));
}

export default WhatsAppWidget;
//# sourceMappingURL=index.modern.js.map
