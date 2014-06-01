# Parallax background
Paralax background a la https://github.com/404

- Easy to use
- Without dependencies

##Example
- [a la Github](http://kibo.github.io/parallax-background/)

##Usage

```
<html>
	<head>
		<title>Parallax</title>
		<style>
			#parallax-layers img{
				postion:absolute;
				top:0;
				left:0;
				z-index: -1;				
			}		
		</style>
	</head>
	<body>
		<div id="parallax-layers">
			<img src="images/layer1.jpg" alt="background">
			<img src="images/layer2.png" alt="middleground">
			<img src="images/layer3.png" alt="foreground">
		</div>
		
		<script src="parallax-bg.js"></script>
	</body>
</html>
```

