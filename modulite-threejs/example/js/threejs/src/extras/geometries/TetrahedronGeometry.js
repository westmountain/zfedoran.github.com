ml.module('three.extras.geometries.TetrahedronGeometry')
.requires('three.Three',
          'three.core.Geometry',
          'three.extras.geometries.PolyhedronGeometry')
.defines(function(){

/**
 * @author timothypratley / https://github.com/timothypratley
 */

THREE.TetrahedronGeometry = function ( radius, detail ) {

	var vertices = [
		[ 1,  1,  1 ], [ -1, -1, 1 ], [ -1, 1, -1 ], [ 1, -1, -1 ]
	];

	var faces = [
		[ 2, 1, 0 ], [ 0, 3, 2 ], [ 1, 3, 0 ], [ 2, 3, 1 ]
	];

	THREE.PolyhedronGeometry.call( this, vertices, faces, radius, detail );

};

THREE.TetrahedronGeometry.prototype = Object.create( THREE.Geometry.prototype );


});