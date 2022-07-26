import { Card } from "@mui/material";

function PostCard({vote = 0, views=0, answers = 0}) {
    return (
        <Card sx={{
            display: 'flex',
            padding: '16px',
            border: '1px solid #f4f4f4',
            justifyContent: 'center',
            boxShadow: 'none',

            

}}>

            <>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'cener',
                    justifyContent: 'center',
                    padding: '10px',
                    fontSize: '16px',
                    
    
    }}>
        <Card  sx={{
                        display: 'flex',
                        fontSize: '16px',
                        padding: "8px",
    }}>
        {vote} : Votes
        </Card>
        <Card  sx={{
                        display: 'flex',
                        fontSize: '16px',
                        padding: "8px"
    }}>
{vote} : Views
        </Card>
        <Card  sx={{
                        display: 'flex',    
                        fontSize: '16px',
                        padding: "8px"
    }}>
        {answers} : Answers
        </Card>
        </Card>
            </>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '75%',
                minHeight: "100px",
                boxShadow: 'none',
                padding:' 15px'
            }} >
                <Card sx={{padding: '10px',  fontSize: '20px', textAlign: 'left'}}> 
                react-router v6 wrapped route component not working [duplicate]
                </Card>
                <Card sx={{textAlign: 'left', display: 'flex', flexDirection: 'row', columnGap: '15px',  boxShadow: 'none' }}>
                    <Card sx={{ background: 'rgb(225, 236, 244)',padding: '8px', fontSize: '12px'}}>reactjs</Card>
                    <Card sx={{ background: 'rgb(225, 236, 244)', padding: '8px', fontSize: '12px'}}> security</Card>
                </Card>
               

            </Card>
    </Card>);
}

export default PostCard;