const useAuthorized = () => {
  return true;
};

export const withAuthorize = ({ Authorized, Unauthorized }) => {
  const WithAuthorizedCheck = (props) => {
    const isAuthorized = useAuthorized();

    return isAuthorized ? (
      <Authorized {...props} />
    ) : (
      <Unauthorized {...props} />
    );
  };

  return WithAuthorizedCheck;
};
