import { Skeleton } from '@mui/material';
import { Stack } from '@mui/material';

export const SkeletonFrame = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'pulse',
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rectangular" width="480px" height={270} />
      <Skeleton variant="rectangular" width="480px" height={100} />
    </Stack>
  );
};
