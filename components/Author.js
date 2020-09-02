import { Avatar, Divider } from "antd";
import "../static/style/components/author.scss";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        {" "}
        <Avatar
          size={100}
          src="https://p4.music.126.net/iWw0Wg-dizspYGKgjC4xIA==/109951165069681733.jpg"
        />
      </div>
      <div className="author-introduction">
        Take a break from worrying about what i can't control .Live a little
        <Divider>联系方法👇</Divider>
        <a href="https://github.com/chenmingzhen" target="_blank">
          <GithubOutlined />
        </a>
       {/*  <QqOutlined></QqOutlined>
        <WechatOutlined></WechatOutlined> */}
      </div>
    </div>
  );
};

export default Author;
