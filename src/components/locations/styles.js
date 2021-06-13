import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    card: {
        backgroundColor: "#333333",
        boxShadow: "0px 4px 16px #00000029",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        padding: '12px 0px 17px 17px',
        margin:"16px 0px"
    },
    name: {
        font: "normal normal bold 16px/10px Poppins",
        color: "#FFFFFF"
    },
    amount: {
        font: "normal normal 300 16px/ 10px Nunito Sans",
        letterSpacing: "0px",
        color: "#FFFFFF",
    },
    grid_align:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    icon_button:{
        color:"white",
        border:"1px solid white",
        height:"36px",
        width:"36px"
    }
});