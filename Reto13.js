function getFilesToBackup(lastBackup, changes) {
    const filter = changes.filter(backup => backup[1] > lastBackup)
    const ids = filter.map(element => element[0]).sort((a,b) => a-b)
    const backup = new Set(ids)
    return [...backup]
  }
  
  const lastBackup = 1546300800
  const changes = [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ]
  
  getFilesToBackup(lastBackup, changes)