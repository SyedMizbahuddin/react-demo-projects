import Tabs from ".";

export default function TabTest() {
  const tabs = [
    {
      label: "one",
      content: "ONNNN",
    },
    {
      label: "two",
      content: "okkkkk",
    },
    {
      label: "three",
      content: "heyyy",
    },
  ];

  const handleChange = (curInd) => {};

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
