import React from 'react';
import {Avatar, Button} from "@mui/material";
import {Title} from "@mui/icons-material";

const About = () => {
    return (
        <div className="flex w-121 p-8">
            <Avatar
                alt="Hamma ali rachid"
                src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg"
            />
            <div className="">
                <Title>About me</Title>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <Title>Contact me</Title>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s
                        </p>
                    </div>
                    <Button>Download</Button>

                </div>

            </div>
        </div>
    );
};

export default About;