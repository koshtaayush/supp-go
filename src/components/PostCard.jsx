import { Card } from "@mui/material";

function PostCard(props) {
    const { data } = props;
    const { postId= 1,
        heading,
        createdAt= '',
        tags= [],
        parentId= null,
        viewCount= 0,
        userId = 1,
        answers,
        vote = 0, } = data
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
                        boxShadow: 'none',
    }}>
        {vote} : Votes
        </Card>
        <Card  sx={{
                        display: 'flex',
                        fontSize: '16px',
                        padding: "8px",
                        boxShadow: 'none',
    }}>
{viewCount} : Views
        </Card>
        <Card  sx={{
                        display: 'flex',    
                        fontSize: '16px',
                        padding: "8px",
                        boxShadow: 'none',
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
            }} >
                <Card sx={{paddingTop: '10px',  fontSize: '20px', textAlign: 'left'}}> 
                {heading}
                </Card>
                <Card sx={{ textAlign: 'left', display: 'flex', flexDirection: 'row', columnGap: '15px', boxShadow: 'none', paddingTop: '10px' }}>
                    {tags.map(tag =>   <Card sx={{ background: 'rgb(225, 236, 244)',padding: '8px', fontSize: '12px'}}>{tag}</Card>)}
                </Card>
               

            </Card>
    </Card>);
}

export default PostCard;