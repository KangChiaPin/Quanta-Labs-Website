#!/usr/bin/perl
use strict;
use warnings;

use CGI;

my $q = new CGI;
my $name = $q->param('Name');
my $email = $q->param('Email');
my $phone = $q->param('Phone');
my $msg = $q->param('Msg');

my $host = 'billy5521@gmail.com';

my $content;

$content += "from : " + $name + "\n"
$content += "email : " + $email + "\n"
$content += "phone : " + $phone + "\n"
$content += "message : " + $Msg + "\n"

# first, create your message
use Email::MIME;
my $message = Email::MIME->create(
	header_str => [
		From    => $email,
		To      => $host,
		Subject => $content,
	],
	attributes => {
		encoding => 'quoted-printable',
		charset  => 'UTF-8',
	},
	body_str => ,
);

# send the message
use Email::Sender::Simple qw(sendmail);
sendmail($message);
