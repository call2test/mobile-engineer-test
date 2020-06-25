## Available Scripts

In the project directory, you can run:

### `npx react-native start`

Runs the app in the development mode.

# Test Instructions

Before you begin, you will need to sign up for a Google Maps key. For this project, we recommend using [React Native Maps](https://github.com/react-native-community/react-native-maps), which will have more indepth instructions as to what kind of API keys you will need to sign up for.

1. Fork this repo.
2. Make the changes needed to accomplish what is listed below.
3. Let us know when you have a solution that we can run locally, then we can schedule some time to meet!

Using your best (simple) design judgment, create an app that does the following:

First, you will be using the City of ABQ Film Office's list of film locations.

## ABQ Film Data Instructions

- Fetch data from the [ABQ Film Office public dataset](https://coagisweb.cabq.gov/arcgis/rest/services/public/FilmLocations/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson) (We also have this hosted in links below. We know the CABQ data set can be very unstable). This data is a collection of locations where Films/TV/etc have been shot. Documentation found [here](http://data.cabq.gov/business/filmlocations/MetaData.pdf).
    - We only want to see locations with a type of "movie".
    - Keep in mind, there are multiple locations for each movie.
- Create a `select` where we can pick a movie.
- With a movie selected, populate the map with `Marker`s (using [react-native-maps](https://github.com/react-native-community/react-native-maps), which is already in the package.json) with the location addresses. These can be derived from the `geometry` key sent back as part of the data. 
- In addition to the `Marker`s, we also expect you to be able to tap on the marker and see the shoot date (in human readable format), the shooting site's name, and the site's address. This can be accomplished using the `Marker`s title and description, or by using a `Callout` component provided by the `react-native-maps` package.


> **We're aware that the ABQ Open Dataset has been timing out.** We have a download of the datasets from 03/19/2020. Of course, these datasets won't dynamically update or have any endpoint filtering. If you're having issues, please use this as an alternative: 
> * [https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json](https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json)