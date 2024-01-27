const Date2String = (date: string) => {
  const updateAtDate = new Date(date);
  return `${updateAtDate.getFullYear()}-${("0" + updateAtDate.getMonth() + 1).slice(-2)}-${("0" + updateAtDate.getDate()).slice(-2)} ${("0" + updateAtDate.getHours()).slice(-2)}:${("0" + updateAtDate.getMinutes()).slice(-2)}:${("0" + updateAtDate.getSeconds()).slice(-2)}`;
};

export default Date2String;
