/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';


// Users.prototype.addRestaurant = function(data) {
//   var collection = firebase.firestore().collection('Users');
//   return collection.add(data);
// };

Users.prototype.getAllUsers = function(renderer) {
  var query = firebase.firestore()
      .collection('Users')
      .limit(50);
      console.log(query)
      console.log("debug --> in Users.prototype.getAllUsers")

  this.getDocumentsInQuery(query, renderer);

  console.log("debug --> after getDocumentsInQuery")
};

Users.prototype.getDocumentsInQuery = function(query, renderer) {
  console.log("debug --> in Users.getDocumentsInQuery")
  query.onSnapshot(function(snapshot) {
    if (!snapshot.size) {
    console.log("debug --> no 'restaurants' found")
    return renderer.empty(); // Display "There are no restaurants".
    }

    console.log("debug --> in snapshot")
    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        console.log("debug --> in removed")
        renderer.remove(change.doc);
      } else {
        console.log("debug --> display")
        renderer.display(change.doc);
      }
    });
  });
};

Users.prototype.getRestaurant = function(id) {
  console.log("debug --> in Users.prototype.getRestaurant: ")
  console.log(firebase.firestore().collection('Users').doc(id).get())
    return firebase.firestore().collection('Users').doc(id).get();
};

Users.prototype.getFilteredRestaurants = function(filters, renderer) {
  /*
    TODO: Retrieve filtered list of restaurants
  */
};

Users.prototype.addRating = function(restaurantID, rating) {
  /*
    TODO: Retrieve add a rating to a restaurant
  */
};