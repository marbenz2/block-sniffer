const Apptime = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  return (
    <div>
      <p className="text-sm">
        {dateTime} (GMT +{(today.getTimezoneOffset() / 60) * -1})
      </p>
    </div>
  );
};

export default Apptime;
