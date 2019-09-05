import csv

from django.core.management import BaseCommand

from server.models import Stock


class Command(BaseCommand):
    help = "Command to insert stock names from CSV file into DB"

    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str)

    def handle(self, *args, **options):
        try:
            print('Inserting data from {}'.format(options['file_name']))
            with open(options['file_name'], 'r') as file:
                reader = csv.DictReader(file, delimiter=',')
                for line in reader:
                    Stock.objects.get_or_create(symbol=line['Symbol'],
                                                name=line['Name'],
                                                industry=line['industry'],
                                                sector=line['Sector'])
        except Exception as e:
            raise e