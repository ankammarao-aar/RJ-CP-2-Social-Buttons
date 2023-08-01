const Button = props => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={className}>{name}</button>;
}

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-card">
      <Button name="Like" className="like" />
      <Button name="Comment" className="comment" />
      <Button name="Share" className="share" />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
