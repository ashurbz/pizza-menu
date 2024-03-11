const Footer = () => {
  const hours = new Date().getHours();

  return (
    <div className="flex flex-col align items-center">
      <div>
        {" "}
        {hours >= 12 && hours <= 22
          ? "We are open from 12:00 to 22:00. Come visit us or order online"
          : "We are closed"}{" "}
      </div>
      <button className="bg-yellow-600 border border-yellow-700 rounded-md p-2 m-5">
        Order
      </button>
      <span></span>
    </div>
  );
};

export default Footer;
