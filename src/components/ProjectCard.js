import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

const ProjectCard = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '1rem',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className="">
            <div className="h-full relative rounded-xl overflow-hidden bg-white shadow-lg">
                <div className="w-full p-2 mb-10">
                    <div className="relative">
                        <img src={data.picSrc} alt={data.name} className="rounded-xl"/>
                        <div className="absolute top-0 bg-yellow-600 rounded-md shadow-md text-white font-bold text-md px-2 m-2">
                            {data.year}
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="font-bold">{data.name}</h3>
                        {/*<p>{data.description}</p>*/}
                        {/*<h3 className="underline font-bold text-xl mt-4">Besoins Techniques :</h3>*/}
                        {/*<p className="font-bold">*/}
                        {/*    {data.strTech}*/}
                        {/*</p>*/}

                    </div>

                </div>
                <div className="flex justify-end  w-full absolute bottom-0 p-2">
                    {/*<h2 className="mt-4 italic">{data.workType}</h2>*/}
                    <Button variant="contained" onClick={handleOpen}>Détails</Button>
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Bonjour :)
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Cette partie n'est pas encore terminée, veuillez essayer plus tard ou contactez-moi pour vous envoyer les détails.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectCard;