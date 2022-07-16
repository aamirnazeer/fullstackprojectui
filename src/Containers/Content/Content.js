import WriteToot from "../WriteToot/WriteToot";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Toot from "../Toot/Toot";

const Content = () => {
  return (
    <div className="content">
      <Wrapper>
        <WriteToot />
      </Wrapper>
      <Wrapper>
        <Toot />
      </Wrapper>
    </div>
  );
};

export default Content;
