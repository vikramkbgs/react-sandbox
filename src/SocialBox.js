import './SocialBox.css';

const SocialBox = (props) => {
  const data = props.product;
  console.log("data", data);
  return (
    <div className="listItem" style={{ backgroundColor: data.bgColor }}>
      <img src={data.icon} alt={data.name} />
      <a href={data.link}>{data.name}</a>
    </div>
  );
};

export default SocialBox;
