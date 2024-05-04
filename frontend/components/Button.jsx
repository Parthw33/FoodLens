
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Button(props) {

    const { label, c, type } = props;

    const icons = {
        login: <LoginIcon />,
        start: <PlayArrowIcon />,
        submit: <DoneIcon />,
        reset: <ClearIcon />,
        logout: <LogoutIcon />,
        livedemo: <LiveTvIcon />
    };

    return(
        <>
            <button className={c}>
            <span className="label px-1">{label}</span>
            {icons[type]}
            </button>
        </>
    )
}
