from rest_framework import serializers
from writers.models import Writer


class WriterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Writer
        fields = ('id',
                  'surname',
                  'name',
                  'middlename',
                  'birthYear',
                  'birthYear',
                  'amountOfBooks',
                  'nobel')
