let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - `${this.startDate.getFullYear()}`
  }
}

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = { horizontal: beginningLocation.horizontal , vertical: beginningLocation.vertical }
    this.endLocation = { horizontal: endLocation.horizontal, vertical: endLocation.vertical };
  }


  blocksTravelled() {
    let horizontalBlocks = 0;
    let verticalBlocks = 0;
    if(this.beginningLocation.horizontal !== this.endLocation.horizontal) {
      const beginningHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
      const endHorizontal = eastWest.indexOf(this.endLocation.horizontal)
      horizontalBlocks += Math.abs(endHorizontal - beginningHorizontal)
    }
    if(this.beginningLocation.vertical !== this.endLocation.vertical) {
      verticalBlocks += Math.abs((parseInt(this.beginningLocation.vertical)) - (parseInt(this.endLocation.vertical)))
    }
    return  horizontalBlocks + verticalBlocks
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}

let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
