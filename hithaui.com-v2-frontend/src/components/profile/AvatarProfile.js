// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';

function AvatarProfile(props) {
  const { user } = props;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          >
            {user.full_name[0].toUpperCase()}
          </Avatar>
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.full_name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.position.name || ''} Khóa ${user.club_year} CLB HIT`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {/* {`${moment().format('hh:mm A')} ${user.timezone}`} */}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      {/* <CardActions>
        <Button color="primary" fullWidth variant="text">
          Thay đổi ảnh đại diện
        </Button>
      </CardActions> */}
    </Card>
  );
}

AvatarProfile.propTypes = {
  user: PropTypes.object
};
export default AvatarProfile;
