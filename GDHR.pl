#!/usr/bin/perl
#-------------------------------------------------+
#    [APM] This script was generated by amp.pl    |
#    [APM] Created time: 2016-01-13 09:03:59      |
#-------------------------------------------------+
# name: GDHR.pl
# func:
# version: 0.1

use strict;
use warnings;

use File::Basename qw/basename/;
use FindBin qw($Bin);
use lib "$Bin/lib/";
use GDHR;

my $outdir = "test";
my $report = GDHR->new('-outdir'=>$outdir,-pipe=>"meta Genome");

my $section = $report->section(id=>"introduction",-page_head=>1);
$section->menu("h1");
$section->submenu("h2");
$section->tsv2html(-file=>"/Bio/User/aipeng/project/tmp/pca/target/6.GO_enrich_heatmap/DEGs/DEGs_enrich/G_72hvsG_0h.DEG_GO_enrichment_result_all.xls",-name=>"test",-header=>1,-max_chars=>12);
$section->break;
$report->write();
$report->pack(-format=>"zip");
