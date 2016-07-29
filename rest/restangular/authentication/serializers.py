from rest_framework import serializers
from models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('name','email','password')

    def create(self, validated_data):
        """
            Create and return a new `user` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
            Update and return an existing `user` instance, given the validated data.
        """
        instance.username = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        return instance


