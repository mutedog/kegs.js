<html>
<head>	
	<!-- regular CSS for page -->	
	<link rel="stylesheet" type="text/css" href="css/main.css">
		<script type="text/javascript" src="js/vendor/jquery.min.js"></script>
<?php
	// set up array
	$beer = array();

	
	// set URL/Paths for csv and recipe pages
	$beersurl = "beers.csv";
	$tap1fB = "";
	$tap2fB = "";
	$tap3fB = "";
	$tap4fB = "";
	$tap5fB = "";
	$tap6fB = "";
	
	// writes csv info into arrays
	$handle = fopen($beersurl, "r");
		// $beer = array fgetcsv($handle, 10, ",");
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			$beer[$data[0]] = array($data[1],$data[2],$data[3],$data[4],$data[5],$data[6],$data[7],$data[8]);
		}
	fclose($handle);
?>
</head>
	
<body>
	<!--
	<?php Print_r($beer); ?>
	-->
	<div class="u-container" id="wrapper">
		<div class="header">
			<div class="header__logo">
				<img src="/images/custom/logo.png" alt="Mute Dog Logo" height="100">
			</div>
				
			<div class="header__title">
				<img src="/images/custom/logo-type.png" alt="Mute Dog Fermenting">
			</div>
		</div>	
		<br />
		<!-- Background div for column headers -->
		<table class="ontap">
			<thead>
				<tr>
					<td>&nbsp;</td>
					<td class="TitleBarBeerName">Name</td>
					<td class="TitleBarInfo">Info</td>
					<td class="TitleBarKeg">Keg Volume</td>
				</tr>
			</thead>
			<tbody>
			
			<?php
				$beernum = 1;
				foreach (array_slice($beer, 1) as $value) {
				 	// Print_r($value);
				// }
			?>
				<tr class="beer" id="beer<?php echo($beernum); ?>">
					<td class="beer__srm">
						<img src="/images/srm/SRM <?php if ($value[5] < 41 || $value[5] == 97 || $value[5] == 98 || $value[5] == 99) { echo $value[5]; } else { echo "41"; } ?>.png" class="srm__img">
					</td>
					<td class="beer__name">
						<h1><?=$value[0];?></h1>
						<h2><?=$value[1];?></h2>
						<h3><?=$value[2];?></h3>
					</td>
					<td class="beer__info">
						<div class="info__row">
							<span class="info__left"><?=$value[3]; ?>%</span>
							<span class="info__right">ABV</span>
						</div>
						<div class="info__row">
							<!--<img src="images/<?=$value[4]; ?> Hops.png" width="50" />-->
							<span class="info__left"><?=$value[4]; ?></span> 
							<span class="info__right">IBU</span>
						</div>
					</td>
					<td class="beer__keg">
						<a href="#" class="pour" data-beer="beer<?=$beernum; ?>"><img src="/images/kegs/<? echo (round(0.15625*$value[6])); ?>.png" class="keg__img"></a>
					</td>
				</tr>
			<?php
				$beernum++;
			}
			?>
			</tbody>
		</table>
		
	</div>
	<script type="text/javascript">
		$(".pour").click( function() {
			var self = $(this);
			var beer = $(self).attr("data-beer");
			$("#wrapper").append()

			alert(beer);
		});
	</script>
</body>
</html>
