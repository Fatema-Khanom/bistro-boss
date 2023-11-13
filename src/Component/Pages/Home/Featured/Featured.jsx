import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredimg from "../../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading={"Check in Out"} heading={"Featured Items"}>
                  
            </SectionTitle>
            <div className=" flex">
                <img src={featuredimg} className="w-[400px]" alt="" />
                <div className="text-start">
                    <p className="">March 20, 2023</p>
                    <p className="">WHERE CAN I GET SOME?</p>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat. Est distinctio, magnam soluta dolore accusantium repudiandae ratione consequatur eius? Qui, expedita! At rerum consequuntur consectetur repellat harum unde temporibus!</p>
                    <button className="btn btn-outline">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;