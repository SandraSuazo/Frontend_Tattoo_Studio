export const handleNavigate = (navigate, path) => {
  setTimeout(() => {
    navigate(path);
  }, 300);
};
