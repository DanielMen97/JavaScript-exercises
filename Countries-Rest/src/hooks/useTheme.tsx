const useTheme = () => {

  const toogleTheme = () => {
    const doc = document.documentElement
    if(doc.getAttribute("data-theme")){
      doc.removeAttribute("data-theme")
    } else {
      doc.setAttribute("data-theme", "dark");
    }
  };

  return {
    toogleTheme
  }
}

export default useTheme