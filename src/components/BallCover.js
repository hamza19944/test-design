import "./comp-style.css"

const BallCover = () => {
    return (
        <div className="balls">
            <div className="img-cont purple_light">
                <img src="./balls/purple_light.png" alt="" />
            </div>
            <div className="img-cont purple_ball">
                <img src="./balls/purple_ball.png" alt="" />
            </div>
            <div className="img-cont red_ball_b">
                <img src="./balls/red_ball_b.png" alt="" />
            </div>
            <div className="img-cont red_ball">
                <img src="./balls/red_ball.png" alt="" />
            </div>
            <div className="img-cont red_light">
                <img src="./balls/red_light.png" alt="" />
            </div>
        </div>
    );
}
 
export default BallCover;