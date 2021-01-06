import React from "react";
import data from "./data.json";
import Board from "react-trello";

let Home = () => {
    return (

        <div className="Test">
            <div className="bg-primary">
                <div className="row">
                    <div className="col col-md-8 col-sm-4 col-lg-12">
                        <Board data={data} draggable editable canAddLanes/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
