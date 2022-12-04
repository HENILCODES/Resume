import React, { useMemo } from 'react'
function Paper(props) {
    console.log("paper");
    const listss = useMemo(()=>{console.log("D"); return props.list},[props.list]);
    return (
        <>
            {props.show ? listss.map(item => item) : ''}
        </>
    )
}
export default React.memo(Paper)