const USER_PROFILE = require ('./DATA/USER_PROFILE.json');
const COMMENT = require ('./DATA/COMMENT.json');
const NEW_VALUE ={
 "NEW_TITLE_VALUE": "",
 "NEW_COMMENT_VALUE": "",
 "NEW_PHONE_VALUE": ""

}
const NEW_USER ={
    "name": "",
    "surname": "",
    "img": "",
    "text": "",
    "position":"",
    "adress":""

}

const initialState = {
"USER_PROFILE": USER_PROFILE,
"COMMENT":COMMENT,
"NEW_VALUE": NEW_VALUE,
"NEW_USER":NEW_USER


}

export default {initialState};