export const apiResultRdfInputString = `
@prefix schema: <http://schema.org/> .

_:b18361_node_1 a <https://agriculture.ld.admin.ch/prif/Request> ;
	<https://agriculture.ld.admin.ch/prif/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> ;
	<https://agriculture.ld.admin.ch/prif/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> ;
	<https://agriculture.ld.admin.ch/prif/targetYield> [
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "160.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
		<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/DeciTONNE-PER-HA> ;
	] ;
	<https://agriculture.ld.admin.ch/prif/contentOfHumus> 2.4 ;
	<https://agriculture.ld.admin.ch/prif/clayPercentage> "31.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/prif/preCrop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/greenManureLegumes> ;
	<https://agriculture.ld.admin.ch/prif/seasonincorporation> <https://ld.admin.ch/cube/dimension/season/spring> ;
	<https://agriculture.ld.admin.ch/prif/seasonsowing> <https://ld.admin.ch/cube/dimension/season/spring> ;
	<https://agriculture.ld.admin.ch/prif/specification> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t13/3/Specifications/notSpecified> ;
	<https://agriculture.ld.admin.ch/prif/precipitation> [
		<https://agriculture.ld.admin.ch/prif/period> <https://ld.admin.ch/cube/dimension/season/spring> ;
		<https://agriculture.ld.admin.ch/prif/intensity> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/Precipitationintensity/high> ;
	] ;
	<https://agriculture.ld.admin.ch/prif/organicfertilizer> [
		<https://agriculture.ld.admin.ch/prif/fertilizerAmount> [
			<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "150.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
			<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/M3-PER-HA> ;
		] ;
		<https://agriculture.ld.admin.ch/prif/fertilizerType> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> ;
		<https://agriculture.ld.admin.ch/prif/nutrientForm> "total" ;
	] ;
	<https://agriculture.ld.admin.ch/prif/fertilization> [
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://agriculture.ld.admin.ch/prif/calc#Difference> ;
		<https://agriculture.ld.admin.ch/prif/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> ;
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> 101.5 ;
		<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
		<https://agriculture.ld.admin.ch/prif/calc#label> "suggested fertilization" ;
		<https://agriculture.ld.admin.ch/prif/calc#minuend> [
			<http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://agriculture.ld.admin.ch/prif/calc#Sum> ;
			<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "160.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
			<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
			<https://agriculture.ld.admin.ch/prif/calc#summand> <https://agriculture.ld.admin.ch/prif/correctionTargetYield>, <https://agriculture.ld.admin.ch/prif/fertilizationNorm>, <https://agriculture.ld.admin.ch/prif/correctionT15>, <https://agriculture.ld.admin.ch/prif/correctionT12>, <https://agriculture.ld.admin.ch/prif/correctionT13> ;
		] ;
		<https://agriculture.ld.admin.ch/prif/calc#subtrahend> <https://agriculture.ld.admin.ch/prif/availableN> ;
	] .

<https://agriculture.ld.admin.ch/prif/targetYield> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "160.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/DeciTONNE-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "target yield" .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/total> a <https://cube.link/Observation> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/content> 3.9 ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient-form> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/total> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/organicfertilizer> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/total> schema:name "totale"@it, "total"@fr, "total"@en, "gesamt"@de ;
	schema:identifier "total" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/Nutrientform/total> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/soluble> a <https://cube.link/Observation> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/content> 2.1 ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient-form> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/soluble> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/organicfertilizer> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/soluble> schema:name "soluble"@fr, "solubile"@it, "soluble"@en, "löslich"@de ;
	schema:identifier "soluble" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/Nutrientform/soluble> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/availableMin> a <https://cube.link/Observation> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/content> "2.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient-form> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/availableMin> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/organicfertilizer> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/availableMin> schema:name "verfügbar, Minimum"@de, "disponible, minimum"@fr, "available, minimum"@en, "disponibile, minimo"@it ;
	schema:identifier "availableMin" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/Nutrientform/availableMin> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/availableMax> a <https://cube.link/Observation> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/content> 2.7 ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient-form> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/availableMax> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/organicfertilizer> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/Nutrientform/availableMax> schema:name "disponibile, massimo"@it, "disponible, maximum"@fr, "available, maximum"@en, "verfügbar, Maximum"@de ;
	schema:identifier "availableMax" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/Nutrientform/availableMax> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/mainProduct> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/producttype> "mainProduct" ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/referenceyielddtha> "185.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/byProduct> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/producttype> "byProduct" ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/referenceyielddtha> "0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/totalHarvestedBiomass> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/producttype> "totalHarvestedBiomass" ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/referenceyielddtha> "185.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3/observation/silageMaize/nitrogen> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/nutrient> <https://ld.admin.ch/vocabulary/chemicalElements/n> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/fertilizationnormkgha> "110.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/silageMaize/185> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/correctiontargetyieldkgdt> "0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/maxtargetyielddtha> "185.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/10/highVeryHigh> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/mineralisation-potential-om> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/highVeryHigh> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/correctionvalue> "-60.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/organicmattercontentpercmin> "10.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/claycontentpercmin> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/highVeryHigh> schema:name "high to very high"@en, "hoch bis sehr hoch"@de, "Elevé à très élevé"@fr, "Da elevato a molto elevato"@it ;
	schema:identifier "highVeryHigh" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/MineralisationpotentialOM/highVeryHigh> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/20/veryHigh> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/mineralisation-potential-om> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/veryHigh> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/correctionvalue> "-100.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/organicmattercontentpercmin> "20.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/claycontentpercmin> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/veryHigh> schema:name "very high"@en, "sehr hoch"@de, "Très élevé"@fr, "Molto elevato"@it ;
	schema:identifier "veryHigh" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/MineralisationpotentialOM/veryHigh> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/2.5/medium> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/mineralisation-potential-om> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/medium> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/correctionvalue> "0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/organicmattercontentpercmin> 2.5 ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/claycontentpercmin> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/medium> schema:name "Medio"@it, "mittel"@de, "medium"@en, "Moyen"@fr ;
	schema:identifier "medium" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/MineralisationpotentialOM/medium> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/0/lowMedium> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/mineralisation-potential-om> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/lowMedium> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/correctionvalue> "20.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/organicmattercontentpercmin> "0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/claycontentpercmin> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/lowMedium> schema:name "low to medium"@en, "schwach bis mittel"@de, "Faible à moyen"@fr, "Da scarso a medio"@it ;
	schema:identifier "lowMedium" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/MineralisationpotentialOM/lowMedium> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/6/mediumHigh> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/mineralisation-potential-om> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/mediumHigh> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/correctionvalue> "-20.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/organicmattercontentpercmin> "6.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/claycontentpercmin> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/MineralisationpotentialOM/mediumHigh> schema:name "medium to high"@en, "mittel bis hoch"@de, "Moyen à élevé"@fr, "Da medio a elevato"@it ;
	schema:identifier "mediumHigh" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/MineralisationpotentialOM/mediumHigh> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2/observation/fullSlurryCattle> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/percentaccountablen> "10.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/organicfertilizer> <https://ld.admin.ch/cube/dimension/organicFertilizer/fullSlurryCattle> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/observation/silageMaize/spring/high> a <https://cube.link/Observation> ;
	<https://cube.link/observedBy> <https://register.ld.admin.ch/staatskalender/organization/10003634> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/precipitation-intensity> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/Precipitationintensity/high> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/crop> <https://ld.admin.ch/cube/dimension/agroscopeCrops/silageMaize> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/periodofprecipitation> <https://ld.admin.ch/cube/dimension/season/spring> ;
	<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/correctionvalue> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/Precipitationintensity/high> schema:name "elevato (> 90 mm)"@it, "high (> 90 mm)"@en, "élevé (> 90 mm)"@fr, "hoch (> 90 mm)"@de ;
	schema:identifier "high" ;
	schema:sameAs <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/Precipitationintensity/high> .

<https://agriculture.ld.admin.ch/prif/availableN> a <https://agriculture.ld.admin.ch/prif/calc#Product> ;
	<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> 58.5 ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#factor> <https://agriculture.ld.admin.ch/prif/fertilizerAmount>, [
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> 0.1 ;
		<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/PERCENT> ;
		<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2/observation/fullSlurryCattle> ;
	], <https://agriculture.ld.admin.ch/prif/fertilizerNutrientContent> .

<https://agriculture.ld.admin.ch/prif/correctionTargetYield> a <https://agriculture.ld.admin.ch/prif/calc#Product> ;
	<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "-0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "correction (target yield)" ;
	<https://agriculture.ld.admin.ch/prif/calc#note> "target yield less than max target yield" ;
	<https://agriculture.ld.admin.ch/prif/calc#factor> [
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://agriculture.ld.admin.ch/prif/calc#Difference> ;
		<http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "-25.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
		<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/DeciTONNE-PER-HA> ;
		<https://agriculture.ld.admin.ch/prif/calc#minuend> <https://agriculture.ld.admin.ch/prif/targetYield> ;
		<https://agriculture.ld.admin.ch/prif/calc#subtrahend> <https://agriculture.ld.admin.ch/prif/referenceYield> ;
	], <https://agriculture.ld.admin.ch/prif/correctionT11> .

<https://agriculture.ld.admin.ch/prif/fertilizationNorm> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "110.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "fertilization norm" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3/observation/silageMaize/nitrogen> .

<https://agriculture.ld.admin.ch/prif/correctionT15> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "30.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "correction (rainfall)" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/observation/silageMaize/spring/high> .

<https://agriculture.ld.admin.ch/prif/correctionT12> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "20.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "correction (soil)" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/0/lowMedium> .

<https://agriculture.ld.admin.ch/prif/correctionT13> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> 0 ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "correction (prev. crop)" ;
	<https://agriculture.ld.admin.ch/prif/calc#note> "no correction value available" .

<https://agriculture.ld.admin.ch/prif/correctionT11> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "0.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-DeciTONNE> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "correction (target yield)" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/silageMaize/185> .

<https://agriculture.ld.admin.ch/prif/referenceYield> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "185.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/DeciTONNE-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "reference yield" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/mainProduct> .

<https://agriculture.ld.admin.ch/prif/fertilizerAmount> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "150.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/M3-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "fertilizer amount" .

<https://agriculture.ld.admin.ch/prif/fertilizerNutrientContent> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> 3.9 ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/KiloGM-PER-M3> ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/total> .

<https://agriculture.ld.admin.ch/prif/maxTargetYield> <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> "185.0"^^<http://www.w3.org/2001/XMLSchema#decimal> ;
	<http://qudt.org/schema/qudt/unit> <http://qudt.org/vocab/unit/DeciTONNE-PER-HA> ;
	<https://agriculture.ld.admin.ch/prif/calc#label> "max target yield" ;
	<https://agriculture.ld.admin.ch/prif/calc#source> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/silageMaize/185> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6m/2> schema:name "Standard values for the nutrient content of solid organic fertilizers (manure) of different types of livestock (stable housing)"@en, "Richtwerte der Gehalte an Nährstoffen von festen Hofdüngern (Mist) verschiedener Nutztierarten bei Stallhaltung"@de, "Teneurs indicatives en éléments nutritifs des engrais de ferme solides (fumier) pour différentes espèces d’animaux de rente en stabulation"@fr, "Tenori di riferimento in elementi nutritivi dei concimi solidi aziendali (letame) prodotti da diverse specie di animali da reddito stabulate"@it .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2> schema:name "Standard values for the nutrient content of liquid organic fertilizers (slurry) of different types of livestock (stable housing)"@en, "Richtwerte der Gehalte an Nährstoffen von flüssigen Hofdüngern (Gülle) verschiedener Nutztierarten bei Stallhaltung"@de, "Teneurs indicatives en éléments nutritifs des engrais de ferme liquides (lisier) pour différentes espèces d’animaux de rente en stabulation"@fr, "Tenori di riferimento in elementi nutritivi dei concimi liquido aziendali (liquame) prodotti da diverse specie di animali da reddito stabulate"@it ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/total>, <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/soluble>, <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/availableMin>, <https://agriculture.ld.admin.ch/agroscope/PRIFm4t6s/2/observation/fullSlurryCattle/nitrogen/availableMax> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4> schema:name "Reference yield of arable crops"@en, "Referenzertrag von Ackerkulturen"@de, "Rendement de référence des grandes cultures"@fr, "Resa di riferimento dei seminativi "@it ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/mainProduct>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/byProduct>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9a/4/observation/silageMaize/totalHarvestedBiomass> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3> schema:name "N, P, K, Mg fertilization norm for arable crops"@en, "N, P, K, Mg Düngenorm für Ackerkulturen"@de, "Normes de fertilisation N, P, K, Mg pour les grandes cultures"@fr, "Norma di fertilizzazione N, P, K, Mg per i seminativi"@it ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t9c/3/observation/silageMaize/nitrogen> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1> schema:name "Correzione della concimazione N qualora l’obiettivo di resa differisca dalla resa di riferimento"@it, "Correction de la fertilisation N lorsque le rendement cible diffère du rendement moyen de référence"@fr, "Correction of N fertilisation for a target yield that deviates from the average yield (reference yield)"@en, "Korrektur der N-Düngung bei einem Zielertrag, der vom Durchschnittsertrag (Referenzertrag) abweicht"@de ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t11/1/observation/silageMaize/185> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2> schema:name "Correction of N fertilisation depending on the mineralisation potential of the organic matter (OM)"@en, "Korrektur der Stickstoffdüngung in Abhängigkeit des Mineralisierungspotenzials der organischen Substanz (OS)"@de, "Correction de la fertilisation N en fonction du potentiel de minéralisation de la matière organique (MO)"@fr, "Correzione della concimazione N in funzione del potenziale di mineralizzazione della sostanza organica (SO)"@it ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/10/highVeryHigh>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/20/veryHigh>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/2.5/medium>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/0/lowMedium>, <https://agriculture.ld.admin.ch/agroscope/PRIFm8t12/2/observation/30/6/mediumHigh> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t13/3> schema:name "Correction of nitrogen fertilization depending on pre-crop"@en, "Korrektur der Stickstoffdüngung in Abhängigkeit der Vorkultur"@de, "Correction de la fertilisation N en fonction du précédent cultural"@fr, "Correzione della concimazione N in funzione del precedente colturale"@it .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2> schema:name "Correction de la fertilisation N en fonction des arrière-effets des apports d’engrais organiques"@fr, "Correzione della concimazione N in funzione dell'effetto residuo degli apporti di concimi organici"@it, "Korrektur der N-Normdüngung infolge Nachwirkung organischer Dünger"@de, "Correction of N fertilization norm due to the legacy effect of organic fertilizers"@en ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t14/2/observation/fullSlurryCattle> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2> schema:name "Korrektur der Stickstoff-Normdüngung in Abhängigkeit der Winter- und Frühjahrsniederschläge"@de, "Correction of N fertilization norm by winter and spring precipitation"@en, "Correction de la fertilisation N en fonction des pluies d’hiver et de printemps."@fr, "Correzione della concimazione N in funzione delle precipitazioni invernali e primaverili"@it ;
	<https://cube.link/observationSet> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/observation/> .

<https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/observation/> <https://cube.link/observation> <https://agriculture.ld.admin.ch/agroscope/PRIFm8t15/2/observation/silageMaize/spring/high> .

`;