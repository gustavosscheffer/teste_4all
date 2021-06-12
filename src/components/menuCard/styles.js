import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    card: {
        backgroundColor: "#464646",
        borderLeft:"6px solid #F3AA00",
        boxShadow: "0px 4px 16px #00000029",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        padding: '17px 17px',
        margin: "16px 0px"
    },
    name: {
        font: "normal normal bold 16px/10px Poppins",
        color: "#FFFFFF"
    },
    description: {
        color: "#FFFFFF",
    },
    grid_align:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    price: {
        font: "normal normal bold 16px/10px Poppins",
        color: "#FFFFFF"
    },
});