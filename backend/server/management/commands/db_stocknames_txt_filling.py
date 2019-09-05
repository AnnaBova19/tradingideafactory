from django.core.management import BaseCommand

from server.models import Stock


class Command(BaseCommand):
    help = "Command to insert stock names from txt file into DB"

    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str)

    def handle(self, *args, **options):
        try:
            print('Inserting data from {}'.format(options['file_name']))
            with open(options['file_name'], 'r') as file:
                data = file.readlines()
                for line in data:
                    info = line.split('|')
                    info[-1] = info[-1].strip()
                    symbol = info[:1][0]
                    name = info[1:2][0]
                    Stock.objects.get_or_create(symbol=symbol, name=name)
        except Exception as e:
            raise e
