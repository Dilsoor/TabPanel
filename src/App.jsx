import "./App.css";
import Tabpanel from "./components/Tabpanel/Tabpanel";

function App() {
  const tabData = [
    {
      title:
        "lorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorum?",
      id: 1,
      active: true,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis\
        nam excepturi, quam voluptatibus, officiis possimus, nihil odit impedit\
        explicabo cupiditate eum! Id modi reprehenderit, illo cum assumenda\
        laboriosam minima architecto quia fugiat harum. Eligendi nulla\
        consectetur pariatur delectus odio fuga voluptatem accusamus, facere\
        quam sequi, recusandae id rem explicabo eveniet",
      id: 2,
      active: false,
    },
    {
      title: "Phone:+998999999999;\
       Emai:asddaf_aqss@gmail.com",
      id: 3,
      active: false,
    },
  ];
  return (
    <div className="App">
      <Tabpanel tabData={tabData} />
    </div>
  );
}

export default App;
