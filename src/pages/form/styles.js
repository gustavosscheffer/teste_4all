import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    label: {
        font: "normal normal bold 14px/19px Nunito Sans ",
        color: "#FFFFFFDE",
        opacity: 1,
        marginBottom: "4px"
    },
    obs: {
        font: "normal normal normal 14px/19px Nunito Sans",
        color: "#FFFFFFDE",
        marginTop: "4px"
    },
    inputs: {
        width: "100%",
        height: "38px",
        border: "1px solid #DEDEDF ",
        borderRadius: "4px",
    },
    text_area: {
        width: "100%",
        height: "136px",
        border: "1px solid #DEDEDF",
        borderRadius: "4px",
    },
    button_save: {
        backgroundColor: "#F3AA00",
        borderRadius: "4px",
        textTransform:"capitalize",
        width:"100%",
        '& .MuiButton-root':{
            fontWeight:"bold"
        }
    }
});