ml.module('three.renderers.renderables.RenderableParticle')
.requires('three.Three',
          'three.core.Vector2')
.defines(function(){

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.RenderableParticle = function () {

	this.object = null;

	this.x = null;
	this.y = null;
	this.z = null;

	this.rotation = null;
	this.scale = new THREE.Vector2();

	this.material = null;

};


});