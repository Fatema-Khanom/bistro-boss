
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredimg from "../../../../assets/home/featured.jpg";
import img from "../../../../assets/home/featured.jpg"

const Featured = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "",
        weight:"600px",
        // opacity:".6",
        // position:"relative",
        backgroundPosition: "center",
    };

    return (
        <div className="" style={backgroundImageStyle}>
            <div className="overlay"></div>
            <SectionTitle subHeading={"Check in Out"} heading={"Featured Items"}>
            </SectionTitle>
            <div className="flex justify-center items-center py-20 px-36">
                <div className="image-container">
                    <img src={featuredimg} className="relative" alt="" />
                </div>
                <div className="md:ml-10 text-start text-white">
                    <p className="">March 20, 2023</p>
                    <p className="">WHERE CAN I GET SOME?</p>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, repellat. Est distinctio, magnam soluta dolore accusantium
                        repudiandae ratione consequatur eius? Qui, expedita! At rerum
                        consequuntur consectetur repellat harum unde temporibus!
                    </p>
                    <button className="btn btn-outline">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
