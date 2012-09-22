ml.module('three.objects.Ribbon')
.requires('three.Three',
          'three.core.Object3D')
.defines(function(){

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Ribbon = function ( geometry, material ) {

	THREE.Object3D.call( this );

	this.geometry = geometry;
	this.material = material;

};

THREE.Ribbon.prototype = Object.create( THREE.Object3D.prototype );


});