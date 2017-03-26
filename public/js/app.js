function search() {
  let q = $('#search-field').val()
  let header = $('#header')
  let searchBox = $('#search-box')
  let searchField = $('#search-field')
  searchField.blur()
  $.get('/search?query=' + q, function (data) {
    console.log(data)
    let results = $('#results')
    results.empty()
    $('#bannerad').hide()
    data.forEach(function (d, i) {
      console.log( d['Institution Name'])
      let result = $('' +
        '<div class="card" style="display: none; width: 100%;">' +
        '<div style="height: 300px;">'+
        '<div class="image' + (i % 3 + 1) + '" style="float: left; height: 300px; width: 150px;"></div>' +
        '<div id="text-description">' +
        '<h1>' + d['Instrument Name'] + '</h1>' +

        '<h2 style="display: inline;">' + d['Facility Name'] + '</h2>' +
        '<img id="facilitylogo" style="position: absolute; top: 0; right: 0; height: 60px; padding: 10px; vertical-align: middle; display: inline" src="img/'+d['Institution Name']+'.png">'+
        '<div style="height: 80px; overflow:hidden; display: -webkit-box; height: 60px;    -webkit-line-clamp: 3;    -webkit-box-orient: vertical; text-overflow: ellipsis;">' + d['Description'] + '</div>' +

        '<div id="expando" style="border-radius: 4px; margin-top: 30px; padding: 10px 40px; color: white !important; background-color: #1e7598; float: right; cursor: pointer;" onclick="expando(this)">MORE</div>'+
        '</div>' +
        '</div>' +
        '<div id="more" style="display: none;">'+
        '<img src="img/map.png" style="float: left;">'+
        '<div style="padding: 20px; margin-left: 312px;"><b>Address:</b> 800 Blackburn Rd, Clayton VIC 3168 <br> <b>Phone:</b> (03) 8540 4100 <br> <b>Hours:</b> Open today · Open 24 hours</div>'+
        '</div>'+

        '</div>'
      )
      results.append(result)
      searchBox.animate({
        "padding": "30px",
        "box-shadow": "0px 0px 10px #000",
        "width": "100%",
        "height": "100px"
      })
      searchField.css({
        "padding": "10px"
      })
      header.slideUp('slow', function(){
        result.slideDown('slow')
        searchBox.css({
          "position": "fixed",
          "top": 0,
        })
      })

    })
  })
}

function expando (e) {
  console.log($(e).closest('#more'))
  $(e).parent().parent().siblings('#more').slideToggle()
}

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(function() {
	$('input.autocomplete').autocomplete({
	  data: {
			"AMREP Olympus BX51 Widefield": 'img/equipment.png',
			"AMREP Olympus BX61 Widefield": 'img/equipment.png',
			"AMREP Olympus IX51 Widefield (Burnet)": 'img/equipment.png',
			"AMREP Olympus IX81 (ACBD) Widefield": 'img/equipment.png',
			"AMREP Zeiss 510 Meta Confocal, BakerIDI": 'img/equipment.png',
			"AMREP Imaging PC ACBD": 'img/equipment.png',
			"AMREP Imaging PC BakerIDI": 'img/equipment.png',
			"AMREP Imaging PC Burnet": 'img/equipment.png',
			"Other - Fume Hood (Econocare)": 'img/equipment.png',
			"Other - Heraeus Labofuge 400 centrifuge": 'img/equipment.png',
			"Other - Live Cell Preparation Hood: ClassII Biohaz": 'img/equipment.png',
			"Other - Live cell preparation hood: Laminar flow": 'img/equipment.png',
			"Leica Abrio Polarising Microscope": 'img/equipment.png',
			"Leica LX Widefield (G55)": 'img/equipment.png',
			"Leica AFX600LX (Biochem) Widefield": 'img/equipment.png',
			"Leica SP5 5 Channel Confocal": 'img/equipment.png',
			"Leica SP5 Upright": 'img/equipment.png',
			"Nikon C1 Invert#1 Confocal": 'img/equipment.png',
			"Nikon C1 Invert#2 Confocal": 'img/equipment.png',
			"Nikon C1 Upright Confocal": 'img/equipment.png',
			"Olympus BX60 Widefield": 'img/equipment.png',
			"Olympus Cell": 'img/equipment.png',
			"Olympus dotSlide": 'img/equipment.png',
			"Olympus MVX10 Dissecting Microscope": 'img/equipment.png',
			"Olympus Provis AX70 Widefield": 'img/equipment.png',
			"Ultraview/Andor Spinning Disk Confocal": 'img/equipment.png',
			"Leica SP8 (Bldg 76 level 3)": 'img/equipment.png',
			"Zeiss LSM780 FCS Confocal": 'img/equipment.png',
			"Other - Imaris OW B77": 'img/equipment.png',
			"G61 - Overkill (Imaris)": 'img/equipment.png',
			"G61 - XP 64bit (CellSens and Zen)": 'img/equipment.png',
			"G61 - OW1 (MetaMorph and Leica LAS AF)": 'img/equipment.png',
			"G61 - OW2 (CellSens and Metamorph)": 'img/equipment.png',
			"G61 - OW3 (AnalySIS & DotSlide Desktop)": 'img/equipment.png',
			"G61 - OW4 (Nikon NISelements and Leica LAS AF)": 'img/equipment.png',
			"Olympus SZX16 Dissecting Microscope": 'img/equipment.png',
			"MMC Olympus Stereologer": 'img/equipment.png',
			"MMC Leica SP5 MP Multiphoton": 'img/equipment.png',
			"MMC API DeltaVision Widefield": 'img/equipment.png',
			"MMC Imaris 2008 Workstation": 'img/equipment.png',
			"MMC Imaris 2011 Workstation": 'img/equipment.png',
			"MMC MetaMorph Workstation": 'img/equipment.png',
			"AMREP BioRad, Immunol Confocal": 'img/equipment.png',
			"AMREP DeltaVision Widefield, Burnet": 'img/equipment.png',
			"AMREP Leica DMIRB Widefield": 'img/equipment.png',
			"AMREP Leica SP1 Confocal, ACBD": 'img/equipment.png',
			"AMREP Nikon nSTORM nSIM Super Resolution": 'img/equipment.png',
			"AMREP Olympus FSX100 Widefield": 'img/equipment.png',
			"AMREP Zeiss Axio Observer Z1 Widefield, Burnet": 'img/equipment.png',
			"G61 - Venom (Imaris)": 'img/equipment.png',
			"Terminator": 'img/equipment.png',
			"Olympus FV1000 Confocal": 'img/equipment.png',
			"AMREP Nikon Ti_e motorised inverted (ACBD lev2)": 'img/equipment.png',
			"MMC Nikon C1 Confocal": 'img/equipment.png',
			"G61 - Drishti": 'img/equipment.png',
			"AMREP Nikon A1r (Monash)": 'img/equipment.png',
			"Drishti": 'img/equipment.png',
			"Imaris PC - Venom": 'img/equipment.png',
			"MMC Imaris 2014 Workstation": 'img/equipment.png',
			"AMREP Nikon A1r (ACBD) Lev 2": 'img/equipment.png',
			"OW2 (CellSens & Metamorph)": 'img/equipment.png',
			"Imaris PC - Overkill": 'img/equipment.png',
			"OW1 (Metamorph & Leica LAS AF)": 'img/equipment.png',
			"OW3 (AnalySIS & Dotslide Desktop)": 'img/equipment.png',
			"OW4 (Nikon NISelements & Leica LAS AF)": 'img/equipment.png',
			"Terminator (Expert Users Only)": 'img/equipment.png',
			"Leica SP2": 'img/equipment.png',
			"AMREP Nikon A1r (Baker)": 'img/equipment.png',
			"TITAN": 'img/equipment.png',
			"STORM": 'img/equipment.png',
			"DEMO - Zeiss AxioZoom (contact Judy)": 'img/equipment.png',
			"Leica SP8 Upright MultiPhoton": 'img/equipment.png',
			"MMC Perkin Elmer Spinning Disk": 'img/equipment.png',
			"Leica SP8 Invert (HyD)": 'img/equipment.png',
			"Leica LX Widefield (G57)": 'img/equipment.png',
			"MMC Leica LX6000 live cell": 'img/equipment.png',
			"AMREP Nikon Ti-U Manual inverted (ACBD lev2)": 'img/equipment.png',
			"Demo - Vutara": 'img/equipment.png',
			"MMC Olympus FV300 Confocal": 'img/equipment.png',
			"Demo NanoLive": 'img/equipment.png',
			"MMC Cellomics Arrayscan": 'img/equipment.png',
			"MMC Olympus FV1200 Confocal": 'img/equipment.png',
			"Abberior STED": 'img/equipment.png',
			"Demo Di-SPIM": 'img/equipment.png',
			"AMREP Olypmpus IX83 TIRF (ACBD)": 'img/equipment.png',
			"MMC NanoLive Demo": 'img/equipment.png',
			"Dicing Saw-DISCO DAD 321-NanoFab": 'img/equipment.png',
			"Fume and lamnar flow hood FC-4.9": 'img/equipment.png',
			"Micro centrifuge-Pico 17-HERAEUS": 'img/equipment.png',
			"PIF - Polyimide curing oven": 'img/equipment.png',
			"Micro milling machine CPM 4030 Isel": 'img/equipment.png',
			"Fumehood FC-4.11 Air based platform": 'img/equipment.png',
			"Cell sorter - BD FACS Jazz--BD Biosciences": 'img/equipment.png',
			"Fume hood PC2 FC-13": 'img/equipment.png',
			"E-beam Evaporator Deposition-PVD75-Kurt J. Lesker": 'img/equipment.png',
			"CVD-DRIE - Deep Reactive Ion Etcher - general": 'img/equipment.png',
			"DEV.1 - Fume cupboard - Development": 'img/equipment.png',
			"Vapor Prime ovens - YES LP-IIIa - Sitek": 'img/equipment.png',
			"Electrophorisis GEL reader-ChemiDoc-It2-UVP": 'img/equipment.png',
			"Laser Doppler Vibrometer-MSA 500-Polytec": 'img/equipment.png',
			"Atomic Force Microscope-MFP-3D-Asylum research": 'img/equipment.png',
			"Mask aligner / NIL / BS alignement - EVG 610 - EVG": 'img/equipment.png',
			"UV Flood Source - 2000-PC - Dymax": 'img/equipment.png',
			"3DN - Photonic Professional GT - Nanoscribe": 'img/equipment.png',
			"Fume Hood FC-4.6 Left": 'img/equipment.png',
			"Fume hood FC-4.7": 'img/equipment.png',
			"Pirahna processing-DLFC 4.1-Lab Systems": 'img/equipment.png',
			"Class 2 Biohazard Safety Cabinet 1-Mars- LABOGENE": 'img/equipment.png',
			"Real time PCR-CFX96-BioRad": 'img/equipment.png',
			"PCR thermal cycler-T-100-BioRad": 'img/equipment.png',
			"Raman microspectrophometer-CRAIC Apollo-CRAIC Tech": 'img/equipment.png',
			"Zeta potential-Zetasizer -Nano ZS": 'img/equipment.png',
			"Class 2 Biohazard Safety Cabinet 2-Mars- LABOGENE": 'img/equipment.png',
			"Steam sterilizer-Autoclave SX-700E-TOMY SIEKO": 'img/equipment.png',
			"He/Ne/Ga FIB nm patterning-Orion NanoFab-Zeiss": 'img/equipment.png',
			"Laser Doppler Vibrometer-UHF 120-Polytec": 'img/equipment.png',
			"Magnetron Sputtering-PVD 75-Kurt J. Lesker": 'img/equipment.png',
			"Mask aligner / BS alignement - MA6 - SUSS": 'img/equipment.png',
			"3D Printer - Photonic Professional GT - Nanoscribe": 'img/equipment.png',
			"Wafer bonder - SB6 - SUSS Microtech": 'img/equipment.png',
			"N-STORM SuperResolution/Confocal microscope-Nikon": 'img/equipment.png',
			"Polymer spin coater - 650M - Laurell": 'img/equipment.png',
			"Deep Silicon Etching-PlasmaPro 100 Estrelas-Oxford": 'img/equipment.png',
			"3D Optical profiler-ContourGT-Bruker": 'img/equipment.png',
			"Stylus Profilometer - Dektak XT - Bruker": 'img/equipment.png',
			"Atomic Force Microscope(AFM)-Dimension Icon-Bruker": 'img/equipment.png',
			"X-ray diffractometer-D2 Phaser-Bruker": 'img/equipment.png',
			"Polishing machine-PM5-Logitech": 'img/equipment.png',
			"650 Â°C Vacuum Furnace-VBF-1200X-MTI Corporation": 'img/equipment.png',
			"PDMS spin coater - WS650 - Laurell": 'img/equipment.png',
			"Acid 1 processing-DLFC 4.2R-Lab Systems": 'img/equipment.png',
			"Acid 2 processing-DLFC4.2 L-Lab Systems": 'img/equipment.png',
			"Cyanide processing-DLFC 4.3 Left-Lab Systems": 'img/equipment.png',
			"Base 1 processing-DLFC-Lab Systems": 'img/equipment.png',
			"Base 2 KOH processing-DLFC 4.4-Lab Systems": 'img/equipment.png',
			"HF processing-DLFC 4.5-Lab Systems": 'img/equipment.png',
			"Spin/Spray coating system - EVG101 - EVG": 'img/equipment.png',
			"Plate reader-SpectraMax Paradigm-Molecular device": 'img/equipment.png',
			"Refrigerated centrifuge-5810R-Eppendor": 'img/equipment.png',
			"Man down unit": 'img/equipment.png',
			"Flow cytometer-Accuri - BD Biosciences": 'img/equipment.png',
			"HPL.1 - Hotplate (AZ Processing ONLY)": 'img/equipment.png',
			"HPL.3 - Hotplate (AZ Processing ONLY)": 'img/equipment.png',
			"Vector Network Analyzer - R&S-Cancelled.": 'img/equipment.png',
			"FB1- Titanium in diffusion of LiNbO3-Production": 'img/equipment.png',
			"FB1 - Titanium in diffusion of LiNbO3 -Development": 'img/equipment.png',
			"Thin-Film Analyzer-F40-Filmetrics": 'img/equipment.png',
			"Flip-chip Bonding - Finetech": 'img/equipment.png',
			"Micro/Nano-contact Imprint Tool - CP - GeSiM": 'img/equipment.png',
			"FB2.2 - Solid Source Boron Doping furnace- CTR 125": 'img/equipment.png',
			"Inverted Fluorescent Cell Imager- Zoe -BioRad": 'img/equipment.png',
			"DC Power Source - PS2520G - Tektronix": 'img/equipment.png',
			"Function Generator - Series 8200 - Tabor": 'img/equipment.png',
			"Micro/Nano-contact Imprint Tool - CP3.0 - GeSiM": 'img/equipment.png',
			"HPL.2 - Hotplate (AZ Processing ONLY)": 'img/equipment.png',
			"Laurell spinner 650M - SU8 only": 'img/equipment.png',
			"DEV.3 - Fume cupboard - Cleaning": 'img/equipment.png',
			"Micro centrifuge- Labogene 1524M-ScanSpeed": 'img/equipment.png',
			"Micro Volume Spectrophotometer- NanoQ- OPTIZEN": 'img/equipment.png',
			"FB2.1 - Sintering in Forming Gas furnace- CTR 125": 'img/equipment.png',
			"Fumehood FC-4.10": 'img/equipment.png',
			"Fumehood FC-4.12 Nitrogen based platform": 'img/equipment.png',
			"Centrifuge - 5702 -Eppendorf": 'img/equipment.png',
			"Spin Coater - WS-650SX - Laurell Technologies": 'img/equipment.png',
			"Sonicator - Q500 - QSONICA": 'img/equipment.png',
			"Muffle Furnace - Thermolyne Thermoscientific": 'img/equipment.png',
			"SourceMeter - 2602 - Keithley": 'img/equipment.png',
			"Multimeter - 2001 - Keithley": 'img/equipment.png',
			"Gas Sensing Platform": 'img/equipment.png',
			"Electrochemical Analyzer/Workstation (600C Series)": 'img/equipment.png',
			"Drill Press - Dremel": 'img/equipment.png',
			"Ultrasonicator Bath - XUB18 - Grant": 'img/equipment.png',
			"Aqua Regia Processing FC 4.2 Right side": 'img/equipment.png',
			"Chromium etching FC 4.2 Right side": 'img/equipment.png',
			"Digital Shaking Waterbath - SWB20D - Ratek": 'img/equipment.png',
			"Preparation area - Desk 1": 'img/equipment.png',
			"Preparation area - Desk 2": 'img/equipment.png',
			"FE-SEM - Desktop Scanning Electron Microscope": 'img/equipment.png',
			"FB1.1 - Silicon Wet/Dry Thermal Oxidation furnace": 'img/equipment.png',
			"Plasma Cleaner - PDC-002 - Harrick Plasma": 'img/equipment.png',
			"Vacuum Oven - Thermo Scientific-2": 'img/equipment.png',
			"Thermal evaporation - K975X - Quorum Technologies": 'img/equipment.png',
			"UV/Ozone cleaner-PoCleaner-BioForce Nanascience": 'img/equipment.png',
			"UV Flood Curing - Sunray 400 SN": 'img/equipment.png',
			"Benchtop UV Transilluminator - UVP": 'img/equipment.png',
			"Vacuum Oven - Thermo Scientific-1": 'img/equipment.png',
			"Hot desk with workstation room 07.04.08": 'img/equipment.png',
			"Plasma Cleaner - PDC-002 - Harrick Plasma": 'img/equipment.png',
			"Laurell spinner WS-650 - Wafer Dryer": 'img/equipment.png',
			"PlasmaPro System100 Cluster-ALD-Oxford": 'img/equipment.png',
			"Ultra centrifuge-V100X-VWR": 'img/equipment.png',
			"Potassium Hydroxide etching FC 4.4": 'img/equipment.png',
			"Microposition Probe-4 Point Probe-Jandel": 'img/equipment.png',
			"Glove box-830- Plas Labs": 'img/equipment.png',
			"Training room with AV and workstation": 'img/equipment.png',
			"Chromium etching FC 4.2 Left side": 'img/equipment.png',
			"Optical Microscope - Nikon LV150N": 'img/equipment.png',
			"Fume Hood FC4.7 Right (SU8 Resist processing)": 'img/equipment.png',
			"Man down unit 1": 'img/equipment.png',
			"PlasmaPro System100 Cluster-PECVD-Oxford": 'img/equipment.png',
			"Fume Hood FC4.7 Left (AZ Resist processing)": 'img/equipment.png',
			"PlasmaPro System100 Cluster-ICP-Oxfrod": 'img/equipment.png',
			"Aqua Regia Processing FC 4.2 Left side": 'img/equipment.png',
			"Spectroscopic Ellipsometer-M-2000 Woollam": 'img/equipment.png',
			"Upright Microscope- BX41 LED - Olympus": 'img/equipment.png',
			"RCA 1 - Organic residue removal FC 4.3 R": 'img/equipment.png',
			"CVD-Three Zone Tube Furnace-MNTF": 'img/equipment.png',
			"Ultrasonicator Bath - XUB18 - Grant": 'img/equipment.png',
			"THP1-SPS POLOS Hotplate-MNTF": 'img/equipment.png',
			"HP 2 (SU8 and Misc Processing)": 'img/equipment.png',
			"HP 1 (SU8 and Misc Processing)": 'img/equipment.png',
			"Teaching class - All instruments": 'img/equipment.png',
			"LSP Sputter Coating System-MNTF": 'img/equipment.png',
			"OAI1 Model 200- Mask Aligner- MNTF": 'img/equipment.png',
			"RCA 2 - Ionic residue removal FC 4.2 R": 'img/equipment.png',
			"TSC1-SPIN150-wafer spinner-MNTF": 'img/equipment.png',
			"TSC3-SPIN150-wafer spinner-MNTF": 'img/equipment.png',
			"TSC4-SPIN150-wafer spinner-MNTF": 'img/equipment.png',
			"RIE 200W Reactive Ion Etcher-MNTF": 'img/equipment.png',
			"TSC2-SPIN150-wafer spinner-MNTF": 'img/equipment.png',
			"OAI2 Model 200- Mask Aligner- MNTF": 'img/equipment.png',
			"THP3-SPS POLOS Hotplate-MNTF": 'img/equipment.png',
			"THP4-SPS POLOS Hotplate-MNTF": 'img/equipment.png',
			"RC8-Spin Coater-MNTF": 'img/equipment.png',
			"Glovebox LC200 system - Left - LC": 'img/equipment.png',
			"Glovebox LC200 right & SCS Spincoater /vacuumoven": 'img/equipment.png',
			"HP 3 (SU8 and Misc Processing)": 'img/equipment.png',
			"E-beam Evaporator Deposition-PVD75-MNTF": 'img/equipment.png',
			"THP2-SPS POLOS Hotplate-MNTF": 'img/equipment.png',
			"HPC-HARRICK Plasma Cleaner-MNTF": 'img/equipment.png',
			"Standard Embedding for EM": 'img/service.png',
			"Standard Embedding for Immuno EM": 'img/service.png',
			"Experimental Consultation/Design": 'img/service.png',
			"FlowJo Training": 'img/service.png',
			"Biomark Only": 'img/service.png',
			"C1 Single-Cell Autoprep System & Biomark": 'img/service.png',
			"Instrument Training": 'img/service.png',
			"Ion Proton": 'img/service.png',
			"Ion PGM": 'img/service.png',
			"Illumina HiSeq 1500": 'img/service.png',
			"Fragment Separation": 'img/service.png',
			"Cell Line identification": 'img/service.png',
			"Sequencing & Electrophoresis (SE) in tubes": 'img/service.png',
			"Sequencing & Electrophoresis (SE) in 96 well tray": 'img/service.png',
			"Capillary Separation (CS) in tubes": 'img/service.png',
			"Capillary Separation (CS) in 96 well tray": 'img/service.png',
			"RNA 6000 Pico": 'img/service.png',
			"Project Design": 'img/service.png',
			"High Sensitivity DNA": 'img/service.png',
			"DNA 1000": 'img/service.png',
			"RNA 6000 Nano": 'img/service.png',
			"Purification & Electrophoresis (PE)": 'img/service.png',
			"Gene Expression": 'img/service.png',
			"Mycoplasma Detection": 'img/service.png',
			"Covaris - Facility Tubes": 'img/service.png',
			"Small RNA": 'img/service.png',
			"Covaris - Own Tubes": 'img/service.png',
			"Dicing": 'img/service.png',
			"Aqua R": 'img/service.png',
			"Monash Micro Imaging": 'img/facility.png',
			"Micro Nano Research Facility": 'img/facility.png',
			"Melbourne Advanced Microscopy": 'img/facility.png',
			"FlowCore - Monash Clayton": 'img/facility.png',
			"MHTP Medical Genomics Facility": 'img/facility.png',
			"Micro Nano Research Facility": 'img/facility.png'
	  },
	  limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
	  onAutocomplete: function(val) {
	    // Callback function when value is autcompleted.
	    console.log(val);
	  },
	  minLength: 2, // The minimum length of the input for the autocomplete to start. Default: 1.
	});
});

  $(document).ready(function(){
	  $('.carousel.carousel-slider').carousel({dist:0});
	  window.setInterval(function(){$('.carousel').carousel('next')},3000)
  });