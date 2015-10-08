angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("edit.html","<div>\n	<h1>Edit User</h1>\n	<hr/>\n	<div class=\"topPadding\">\n		<div ng-controller=\"UpdateController\">\n			<form ng-submit=\"submitEdit()\" ng-controller=\"CreateController\">\n				<label>First Name:\n					<input type=\"text\" ng-model=\"user.firstName\" required></input>\n				</label>\n				<label>Last Name:\n					<input type=\"text\" ng-model=\"user.lastName\" required></input>\n				</label>\n				<label>Phone:\n					<input type=\"text\" ng-model=\"user.phone\" required></input>\n				</label>\n				<label>Email:\n					<input type=\"text\" ng-model=\"user.email\" disabled></input>\n				</label>\n				<input type=\"submit\" value=\"Submit\">\n			</form>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("list.html","<table class=\"table\">\n  <tr ng-repeat=\"user in users\">\n    <td>\n      {{user.firstName}} {{user.lastName}}\n      <button type=\"button\" class=\"rightFloat\" ng-click=\"edit(user._id);\">Edit</button>\n      <button type=\"button\" class=\"rightFloat\" ng-click=\"disp(user._id);\">View</button>\n    </td>\n  </tr>\n</table>\n");
$templateCache.put("new.html","<div>\n	<h1>Sign Up</h1>\n	<hr/>\n	<div class=\"topPadding\">\n		<div ng-controller=\"CreateController\">\n			<form ng-submit=\"submit()\" ng-controller=\"CreateController\">\n				<label>First Name:\n					<input type=\"text\" ng-model=\"user.firstName\" required></input>\n				</label>\n				<label>Last Name:\n					<input type=\"text\" ng-model=\"user.lastName\" required></input>\n				</label>\n				<label>Phone:\n					<input type=\"text\" ng-model=\"user.phone\" required></input>\n				</label>\n				<label>Email:\n					<input type=\"email\" ng-model=\"user.email\" required></input>\n				</label>\n				<input type=\"submit\" value=\"Submit\">\n			</form>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("profile.html","<div>\n	<h1>User Profile</h1>\n	<hr/>\n	<div class=\"topPadding\">\n		<div ng-controller=\"ProfileController\">\n			<span class=\"rightFloat\">\n				<a ui-sref=\"userslist.edit({userId: user._id})\">Edit</a>\n				<a href=\"#\" ng-click=\"del(user.uId);\">Delete</a>\n			</span>\n			<p id=\"UserName\">Name: {{user.firstName }} {{user.lastName}}</p>\n			<p id=\"UserPhone\">Phone: {{user.phone}}</p>\n			<p id=\"UserEmail\">Email: {{user.email}}</p>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("userslist.html","<h1>Users</h1>\n<hr/>\n<a ui-sref=\"userslist.list\">Show Users</a>\n<a ui-sref=\"userslist.new\">Sign Up</a>\n<div class=\"topPadding leftPadding\" ui-view></div>\n");}]);