const USER_PROFILE = require ('./DATA/USER_PROFILE.json');
const COMMENT = require ('./DATA/COMMENT.json');
const NEW_VALUE ={
 "NEW_TITLE_VALUE": "",
 "NEW_COMMENT_VALUE": "",
 "NEW_PHONE_VALUE": ""

}

const initialState = {
"USER_PROFILE": USER_PROFILE,
"COMMENT":COMMENT,
"NEW_VALUE": NEW_VALUE,


}

export default {initialState};