GET - sends request to server and server response with js files.

1. API Endpoints : BaseURL/Endpoint - random is Endpoint. e.g random, filter etc.
   GET https://bored-api.appbrewery.com/some-endpoint
   https://bored-api.appbrewery.com/random

2. Query Parameters : for filtering and searching.
   https://bored-api.appbrewery.com/endpoint?query=value
   https://bored-api.appbrewery.com/filter?type=education

3. Multiple Query Parameters :
   https://bored-api.appbrewery.com/endpoint?query=value&query2=value&query3=value
   https://bored-api.appbrewery.com/filter?type=social&participants=2

4. Path Parameters : to identifiy resources in api. e.g id, key, username, etc.
   https://bored-api.appbrewery.com/endpoint/{path-parameter}
   https://bored-api.appbrewery.com/activity/3943506
