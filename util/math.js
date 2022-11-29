  // pass random numbers down from server so it doesn't get rendered everytime user enters the screen
  export const renderIndex = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    return randomIndex
  }

  // pass random numbers down from server so it doesn't get rendered everytime user enters the screen
  export const renderIndexAnomaly = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    return randomIndex
  }

  export const renderGanIndex = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(10));
    return randomIndex
  }

  export const renderJiIndex = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(12));
    return randomIndex
  }