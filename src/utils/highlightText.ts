const searchFragment = (text: string, filter: string) => {
  const regex = new RegExp(filter, "gi");
  return text.match(regex);
};

export default searchFragment;
