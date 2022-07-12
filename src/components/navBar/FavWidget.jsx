import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavWidget = () => {
    return (
        <Badge badgeContent={2} color="error">
            <FavoriteIcon/>
        </Badge>
        )
}

export default FavWidget